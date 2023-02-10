import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const WhatsAppBtn = () => {
  return (
    <FloatingWhatsApp 
        phoneNumber={"+905456031675"} 
        accountName={"Nova Car Care"} 
        chatboxHeight={400}
        // darkMode
        allowEsc
        notification
        notificationSound={true}
        allowClickAway
        avatar={"https://novacarcare.s3.amazonaws.com/whatsapp.png"}
    />
  )
}

export default WhatsAppBtn;