export const SITE = {
  phone: "+94 76 535 1012",
  phoneLink: "tel:+94 76 535 1012",
  email: "champlanka10@gmail.com",
  emailLink: "mailto:champlanka10@gmail.com",
  whatsappNumber: "94765351012",
  address: "No. 10, Kandy Road, Jaffna, Sri Lanka. 40000.",
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://www.instagram.com/champlanka?igsh=dnZtb3Rub3FyenRs",
    tiktok: "https://www.tiktok.com/@champlanka?_r=1&_t=ZS-96AjVQRoYl6",
    youtube: "https://youtube.com",
  },
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject: string, body: string): string {
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
