import { EmailJSResponseStatus } from '@emailjs/browser';
import emailjs from '@emailjs/browser';
import { firstValueFrom } from 'rxjs';
import { EMAILJS_CONFIG } from './emailjs.config';
import { EmailjsService } from './emailjs.service';

vi.mock('@emailjs/browser', () => ({
  default: {
    send: vi.fn(),
  },
  EmailJSResponseStatus: class {
    status: number;
    text: string;

    constructor(status = 200, text = 'OK') {
      this.status = status;
      this.text = text;
    }
  },
}));

describe('EmailjsService', () => {
  beforeEach(() => {
    vi.mocked(emailjs.send).mockReset();
  });

  it('sends form details through the configured EmailJS service and template', async () => {
    vi.mocked(emailjs.send).mockResolvedValue(new EmailJSResponseStatus(200, 'OK'));
    const service = new EmailjsService();

    const result = await firstValueFrom(service.sendRequest({
      type: 'devis',
      nom: 'Jean Dupont',
      email: 'jean@example.com',
      telephone: '0160751664',
      codePostal: '91280',
      typeTravaux: 'Rénovation toiture',
      projet: 'Demande de test',
    }));

    expect(result).toBe('emailjs-sent');
    expect(emailjs.send).toHaveBeenCalledWith(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      expect.objectContaining({
        request_type: 'Demande de devis',
        to_email: 'freddyrolandhinkamma877@gmail.com',
        reply_to: 'jean@example.com',
        from_name: 'Jean Dupont',
        telephone: '0160751664',
        code_postal: '91280',
        type_travaux: 'Rénovation toiture',
        message: 'Demande de test',
      }),
      { publicKey: EMAILJS_CONFIG.publicKey },
    );
  });
});
