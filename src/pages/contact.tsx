import { Phone, Mail, MapPin, Loader2 } from 'lucide-react';
import { useRef, FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import { LiaLinkedin } from 'react-icons/lia';
export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID, // Replace with your EmailJS service ID
        import.meta.env.VITE_TEMPLATE_ID, // Replace with your EmailJS template ID
        formRef.current!,
        import.meta.env.VITE_PUBLIC_KEY // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          console.log(result.text);
        },
        (error) => {
          alert('Failed to send message, please try again.');
          console.error(error.text);
        }
      )
      .finally(() => {
        setLoading(false);
        formRef.current?.reset();
      });
  };
  return (
    <div className="min-h-screen bg-zinc-950 py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="p-8 rounded-lg bg-zinc-900/50 border border-zinc-800">
              <h2 className="text-4xl font-mono text-[#00FF94] mb-4">Let&apos;s work together</h2>
              <p className="text-zinc-400 mb-8">
                Have a project in mind? Let&apos;s discuss how we can help bring your ideas to life.
              </p>
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input placeholder="Firstname" name='firstname' required className="bg-zinc-800/50 border border-zinc-700 rounded p-2 text-white" />
                  <input placeholder="Lastname" name='lastname' required className="bg-zinc-800/50 border border-zinc-700 rounded p-2 text-white" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <input placeholder="Email address" type="email" name='email' required className="bg-zinc-800/50 border border-zinc-700 rounded p-2 text-white" />
                  <input placeholder="Phone number" type="tel" name='phone' required className="bg-zinc-800/50 border border-zinc-700 rounded p-2 text-white" />
                </div>
                <select name='service' required className="w-full bg-zinc-800/50 border border-zinc-700 rounded p-2 text-white">
                  <option value="">Select a service</option>
                  <option value="Frontend">Frontend Development</option>
                  <option value="Backend">Backend Development</option>
                  <option value="Full stack">Full Stack Development</option>
                  <option value="Database management">Database management</option>
                  <option value="Web security">Web security</option>
                  <option value="seo">SEO</option>
                </select>
                <textarea name='message' required
                  placeholder="Type your message here."
                  className="w-full bg-zinc-800/50 border border-zinc-700 rounded p-2 text-white min-h-[150px]"
                ></textarea>
                <button type='submit' className="flex items-center justify-center bg-[#00FF94] text-black hover:bg-[#00FF94]/90 px-4 py-2 rounded">
                  Send message {loading && <Loader2 className='ml-2 animate-spin'/>}
                </button>
              </form>
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-zinc-900/50 border border-zinc-800">
              <div className="flex items-center gap-4">
                <Phone className="text-[#00FF94]" />
                <div>
                  <div className="text-sm text-zinc-400">Phone</div>
                  <div className="text-white">(+93) 729063120</div>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-lg bg-zinc-900/50 border border-zinc-800">
              <div className="flex items-center gap-4">
                <Mail className="text-[#00FF94]" />
                <div>
                  <div className="text-sm text-zinc-400">Email</div>
                  <div className="text-white">keraamzabih@gmail.com</div>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-lg bg-zinc-900/50 border border-zinc-800">
              <div className="flex items-center gap-4">
                <LiaLinkedin className="text-[#00FF94] h-9 w-9" />
                <div>
                  <div className="text-sm text-zinc-400">Linked In</div>
                  <div className="text-white">https://linkedin.com/in/zabih-keraam</div>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-lg bg-zinc-900/50 border border-zinc-800">
              <div className="flex items-center gap-4">
                <MapPin className="text-[#00FF94]" />
                <div>
                  <div className="text-sm text-zinc-400">Address</div>
                  <div className="text-white">Kabul, Afghanistan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

