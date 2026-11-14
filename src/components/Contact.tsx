import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const items = [
  { icon: Mail, title: "Email", value: "devxub@gmail.com", href: "mailto:devxub@gmail.com" },
  { icon: Phone, title: "Phone", value: "+880 1325-584606", href: "tel:+8801325584606" },
  { icon: MapPin, title: "Location", value: "Dhaka, Bangladesh", href: null },
];

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-card">
          <div>
            <h3>Let's Work Together</h3>
            <p>
              Have a project in mind or a role to fill? Let's discuss and build something amazing
              together.
            </p>
            <a className="btn btn-primary" href="mailto:devxub@gmail.com" style={{ marginTop: 22 }}>
              Get In Touch <ArrowRight size={16} />
            </a>
          </div>

          <div className="contact-items">
            {items.map((i) => (
              <div className="contact-item" key={i.title}>
                <span className="ic">
                  <i.icon size={22} />
                </span>
                <h4>{i.title}</h4>
                {i.href ? (
                  <a href={i.href}>{i.value}</a>
                ) : (
                  <span>{i.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
