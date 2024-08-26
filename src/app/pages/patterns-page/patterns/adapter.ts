interface IEmailProvider {
  sendEmail(email: string): Promise<{ done: boolean }>;
}

class EmailSender {
  constructor(private emailProvider: IEmailProvider) {}

  public sendEmail(email: string): Promise<{ done: boolean }> {
    return this.emailProvider.sendEmail(email);
  }
}

class CloudEmailProvider {
  public send(email: string): Promise<{ ok: boolean }> {
    return Promise.resolve({ ok: true });
  }
}

class CloudEmailProviderAdapter implements IEmailProvider {
  constructor(private emailProvider: CloudEmailProvider) {}

  public async sendEmail(email: string): Promise<{ done: boolean }> {
    const value = await this.emailProvider.send(email);
    return { done: value.ok };
  }
}

const cloudEmailProvider = new CloudEmailProvider();

const cloudEmailProviderAdapter = new CloudEmailProviderAdapter(cloudEmailProvider);

const emailSender = new EmailSender(cloudEmailProviderAdapter);

emailSender.sendEmail('Hello world!');

