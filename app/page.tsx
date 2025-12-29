import type { Metadata } from 'next';
import QrCodeGeneratorTool from './components/QrCodeGeneratorTool';

export const metadata: Metadata = {
  title: 'QR Code Generator — Create QR Codes for Free',
  description: 'Generate QR codes for URLs, text, contact info, WiFi, and more. Fast, secure, browser-based QR code creation.',
  keywords: 'QR code generator, create QR code, QR code maker, free QR code, generate QR',
};

const featurePillars = [
  { title: 'Instant generation', description: 'QR codes appear immediately as you type. No waiting, no delays.' },
  { title: 'Privacy-first', description: 'All generation happens in your browser. Your data never leaves your device.' },
  { title: 'High quality', description: 'Generated QR codes are high-resolution PNG images suitable for print and digital use.' },
];

const seoContent = [
  {
    title: 'Why use QR codes',
    body: [
      'QR codes bridge the physical and digital worlds. A simple scan with a smartphone camera instantly opens websites, displays contact information, connects to WiFi networks, or shows product details. This convenience makes QR codes ubiquitous in marketing, retail, hospitality, and everyday life.',
      'The pandemic accelerated QR code adoption dramatically. Contactless menus, digital payment systems, and health pass verification all rely on QR codes. What was once a novelty became essential infrastructure for safe, touchless interactions.',
      'Marketing campaigns benefit immensely from QR codes. Print advertisements, product packaging, business cards, and event posters can link directly to websites, videos, or promotional offers. This direct connection eliminates the friction of typing URLs and increases engagement rates.',
      'Business efficiency improves with QR codes for inventory management, asset tracking, and document organization. Scanning a code on equipment instantly pulls up maintenance records, manuals, and warranty information. This quick access saves time and reduces errors.',
      'Event management relies on QR codes for ticketing, check-in, and attendee tracking. Digital tickets with QR codes eliminate printing costs, prevent counterfeiting, and provide real-time attendance data. Organizers can manage thousands of attendees efficiently.',
    ],
  },
  {
    title: 'Understanding QR code technology',
    body: [
      'QR (Quick Response) codes are two-dimensional barcodes that store information in a grid of black and white squares. Unlike traditional barcodes that hold limited data horizontally, QR codes store data both horizontally and vertically, enabling much higher information density.',
      'Error correction is built into QR code design. Even if part of the code is damaged or obscured, smartphones can still read it successfully. This redundancy makes QR codes reliable in real-world conditions where printing imperfections or physical damage occur.',
      'Data capacity varies based on QR code version and error correction level. Small QR codes hold URLs or short text. Larger codes can store contact information (vCard), WiFi credentials, or several paragraphs of text. The more data you encode, the denser and larger the QR code becomes.',
      'Smartphone cameras have built-in QR code readers. Modern iOS and Android devices automatically recognize QR codes when you point the camera at them. No special app is required, making QR codes accessible to virtually everyone with a smartphone.',
      'QR code standards ensure universal compatibility. Any QR code generator creates codes that any QR code reader can scan. This standardization eliminates compatibility concerns and ensures your codes work everywhere.',
    ],
  },
  {
    title: 'Common QR code use cases',
    body: [
      'Restaurant menus transitioned to QR codes during the pandemic and many establishments kept them. Diners scan a code on their table to view the menu on their phone. This eliminates physical menus, reduces printing costs, and allows instant menu updates.',
      'Business cards with QR codes enable instant contact sharing. Instead of manually typing contact information, recipients scan the code to save your details directly to their phone. This convenience increases the likelihood people will actually save and use your contact information.',
      'Product packaging uses QR codes to provide additional information, instructions, or promotional content. Scanning a code on food packaging might show recipes, nutritional details, or sourcing information. Electronics packaging links to setup guides and support resources.',
      'WiFi sharing becomes effortless with [QR Code Generator] tools. Create a QR code containing your network name and password. Guests scan the code and connect automatically without typing complex passwords. This convenience is especially valuable for businesses with guest WiFi.',
      'Payment systems increasingly use QR codes for transactions. Mobile payment apps generate QR codes that merchants scan to receive payment. This method is faster than card transactions and works without physical contact or card readers.',
    ],
  },
  {
    title: 'Best practices for QR codes',
    body: [
      'Size matters for QR code readability. Codes must be large enough for smartphone cameras to focus and read. A minimum size of 2×2 centimeters works for close-range scanning. Larger codes (5×5 cm or more) are better for posters and signs where people scan from a distance.',
      'Contrast ensures reliable scanning. Black codes on white backgrounds provide maximum contrast and work best. Colored QR codes can work but may cause scanning issues in poor lighting. Avoid light colors on light backgrounds or dark colors on dark backgrounds.',
      'Testing is essential before printing or publishing QR codes. Scan your generated code with multiple devices and QR code reader apps to ensure it works correctly. A non-functional QR code on printed materials is expensive to fix.',
      'URL shorteners improve QR code simplicity. Long URLs create dense, complex QR codes that are harder to scan. Shortened URLs produce simpler codes with better error correction and faster scanning. Services like bit.ly or custom short domains work well.',
      'Context helps users understand what scanning will do. Add text near the QR code explaining what happens when scanned: "Scan for menu," "Scan to connect to WiFi," or "Scan for product details." This context increases scan rates significantly.',
    ],
  },
];

const faqs = [
  { question: 'Are QR codes free to create and use?', answer: 'Yes, QR codes are free to generate and use. There are no licensing fees or restrictions on creating and distributing QR codes.' },
  { question: 'Do QR codes expire?', answer: 'Static QR codes (like those generated by this tool) never expire. They contain the data directly and work forever. Dynamic QR codes that redirect through a service may expire if the service discontinues.' },
  { question: 'Can I customize QR code colors?', answer: 'While this tool generates standard black and white codes for maximum compatibility, you can edit the downloaded image in design software to add colors or logos.' },
  { question: 'What happens to my data?', answer: 'Nothing. All QR code generation happens in your browser. No data is sent to any server. Your information stays completely private.' },
];

export default function Home() {
  return (
    <div className="bg-grid-slate min-h-screen">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex flex-col gap-1">
            <a className="text-2xl font-semibold tracking-tight text-white" href="/">QR Code Generator</a>
            <p className="text-sm text-slate-400">Create QR codes instantly</p>
          </div>
          <nav className="flex items-center gap-4 text-sm text-slate-300">
            <a className="transition hover:text-white" href="/">Home</a>
            <a className="transition hover:text-white" href="mailto:support@lightning.studio">Support</a>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <QrCodeGeneratorTool />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {featurePillars.map((pillar) => (
            <div key={pillar.title} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <h3 className="mb-2 text-lg font-semibold text-white">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300">{pillar.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 space-y-12">
          <h2 className="text-3xl font-semibold text-white">In-depth guide</h2>
          {seoContent.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-xl font-semibold text-white">{section.title}</h3>
              <div className="space-y-4">
                {section.body.map((paragraph, idx) => {
                  const linkMatch = paragraph.match(/\[QR Code Generator\]/);
                  if (linkMatch) {
                    const parts = paragraph.split('[QR Code Generator]');
                    return (
                      <p key={idx} className="leading-relaxed text-slate-300">
                        {parts[0]}
                        <a href="https://toolsvana.com/tool/qr-code-generator" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors underline decoration-cyan-400/30 hover:decoration-cyan-300">QR Code Generator</a>
                        {parts[1]}
                      </p>
                    );
                  }
                  return <p key={idx} className="leading-relaxed text-slate-300">{paragraph}</p>;
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <h2 className="mb-8 text-3xl font-semibold text-white">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
                <h3 className="mb-2 text-lg font-semibold text-white">{faq.question}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="mt-16 border-t border-white/10 bg-slate-950/80 py-8 text-center text-sm text-slate-400">
        <p>All processing happens locally in your browser. Powered by Lightning Studio.</p>
      </footer>
    </div>
  );
}
