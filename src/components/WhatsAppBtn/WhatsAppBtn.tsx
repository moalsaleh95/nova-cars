import React, { useEffect, useState } from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const WhatsAppBtn = () => {

  const isDark = localStorage.theme === 'dark' ? true : false;
  

  return (
    <FloatingWhatsApp 
        phoneNumber={"+905549867024"} 
        accountName={"Nova Car Care"} 
        chatboxHeight={400}
        allowEsc
        notification
        notificationSound={true}
        allowClickAway
        avatar={"https://novacarcare.s3.amazonaws.com/whatsapp.png"}
        messageDelay={1}
        darkMode = {isDark}
        // statusMessage={""}
        // chatMessage={""}
    />
  )
}

export default WhatsAppBtn;