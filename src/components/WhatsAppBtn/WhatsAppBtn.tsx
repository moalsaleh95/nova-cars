import React, { useEffect } from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const WhatsAppBtn = () => {

  const isDark = localStorage.theme === 'dark' ? true : false;

  useEffect(() => {
    setTimeout(() => {
      const btn = document.getElementsByClassName("styles-module_whatsappButton__tVits floating-whatsapp-button")?.[0];
      // @ts-ignore
      // Property 'click' does not exist on type 'Element'.
      btn.click()
    }, 15000);
  }, [])

  return (
    <FloatingWhatsApp
      phoneNumber={"+905433297151"}
      accountName={"Nova Car Care"}
      chatboxHeight={400}
      allowEsc
      notification={true}
      notificationSound={true}
      allowClickAway
      messageDelay={1}
      darkMode={isDark}
      avatar={"https://novacarcare.s3.amazonaws.com/whatsapp.png"}
      statusMessage={"Çevrimiçi"}
      chatMessage={"Merhabalar,                              Nasıl yardımcı olabiliriz?"}
    />
  )
}

export default WhatsAppBtn;