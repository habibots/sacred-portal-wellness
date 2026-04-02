'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to send');

      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="text-center py-8">
        <div className="bg-success-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-success-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-h5 font-display mb-2">Message Sent!</h3>
        <p className="text-body text-charcoal-600 mb-6">
          Thank you for reaching out. I&apos;ll get back to you within 24-48 hours.
        </p>
        <Button variant="outline" onClick={() => setStatus('idle')}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-body-sm font-medium text-charcoal-700 mb-1">
            Name *
          </label>
          <Input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-body-sm font-medium text-charcoal-700 mb-1">
            Email *
          </label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-body-sm font-medium text-charcoal-700 mb-1">
          Subject *
        </label>
        <Input
          id="subject"
          type="text"
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          placeholder="How can I help you?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-body-sm font-medium text-charcoal-700 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell me about your wellness goals or questions..."
          className="flex w-full rounded-md border border-charcoal-200 bg-white px-4 py-3 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800 disabled:cursor-not-allowed disabled:opacity-50 resize-vertical"
        />
      </div>

      {status === 'error' && (
        <div className="bg-error-100 text-error-700 p-3 rounded-md text-body-sm">
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
