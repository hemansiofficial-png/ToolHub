import { NextResponse } from 'next/server'
import { getAdSensePublisherId } from '../../utils/site'

export async function GET() {
  const publisherId = getAdSensePublisherId()
  const content = publisherId
    ? `google.com, ${publisherId}, DIRECT, f08c47fec0942fa0`
    : [
        '# Set NEXT_PUBLIC_ADSENSE_PUBLISHER_ID before enabling AdSense.',
        '# Example:',
        '# google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0',
      ].join('\n')

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
