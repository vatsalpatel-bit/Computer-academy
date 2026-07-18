import { z } from 'zod';
import { resend } from '../utils/transport.js';
export const sendEnquiry = async (req, res) => {
  try {
    const enquirySchema = z.object({
      name: z
        .string()
        .trim()
        .min(3, 'Name must be at least 3 characters')
        .max(100, 'Name cannot exceed 100 characters'),

      email: z.email('Please enter a valid email address'),

      phone: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit phone number'),

      course: z.string().min(1, 'Please select a course'),

      batch: z.string().min(1, 'Please select a batch'),

      city: z
        .string()
        .trim()
        .min(2, 'City name must be at least 2 characters')
        .max(100, 'City name cannot exceed 100 characters'),

      message: z
        .string()
        .trim()
        .min(20, 'Message must be at least 20 characters')
        .max(1000, 'Message cannot exceed 1000 characters'),
    });
    const result = enquirySchema.safeParse(req.body);

    if (!result.success) {
      return res.status(404).json({
        success: false,
        error: result.error.issues,
      });
    }
    const { name, email, phone, course, message } = result.data;

    await resend.emails.send({
      from: 'Computer Academy <onboarding@resend.dev>',
      to: 'vatsalpatel13092006@gmail.com',
      subject: `New Enquiry - ${course}`,
      html: `
        <h2>New Course Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Course:</strong> ${course}</p>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: 'Enquiry sent successfully',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};
