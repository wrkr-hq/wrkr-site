import { WebClient } from '@slack/web-api';
import { NextRequest } from 'next/server';

const CH_WEBSITE = 'C0AV4UPUQH3';

const slack = new WebClient(process.env.SLACK_TOKEN);

export async function POST(request: NextRequest) {
  const { name, email, organization, reason, message } = await request.json();

  if (!name || !email || !message) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const text = [
    `*New contact form submission*`,
    `*Name:* ${name}`,
    `*Email:* ${email}`,
    organization ? `*Organization:* ${organization}` : null,
    reason ? `*Reason:* ${reason}` : null,
    `*Message:* ${message}`,
  ].filter(Boolean).join('\n');

  await slack.chat.postMessage({ channel: CH_WEBSITE, text, unfurl_links: false });

  return Response.json({ ok: true });
}
