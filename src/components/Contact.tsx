import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import React from "react";

function Contact() {
  return (
    <div>
      <h2 className="text-xl tracking-tight font-semibold mb-4">Contact 📧</h2>
      <p>Feel free to reach me out</p>
      <span className="inline-flex items-center gap-1 mt-4">
        <EnvelopeSimple size={22}/>
        <a
          href="mailto:sriramoji.abhiram@gmail.com"
          className="underline dark:text-white/85 dark:hover:text-white"
        >
          sriramoji.abhiram@gmail.com
        </a>
      </span>
    </div>
  
  );
}

export default Contact;
