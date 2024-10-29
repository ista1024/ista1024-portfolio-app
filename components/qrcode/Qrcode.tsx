import { View } from 'react-native';
import { useEffect, useState } from 'react';
import { sanitizeString, sanitizeNumber } from '@/tools/sanitizeInput';

import QRCode from "react-native-qrcode-svg";

type QrcodeProps = {
  value?: string;
  size?: number;
};

export default function Qrcode({ value = "https://ista1024-nextjs.vercel.app/", size = 200 }: QrcodeProps) {
  const [qrValue, setQrValue] = useState(value);
  const [qrSize, setQrSize] = useState(size);

  useEffect(() => {
    const sanitizedValue = sanitizeString(value) || "https://ista1024-nextjs.vercel.app/";
    setQrValue(sanitizedValue);
  }, [value]);

  useEffect(() => {
    const sanitizedSize = sanitizeNumber(size) || 200;
    setQrSize(sanitizedSize);
  }, [size]);

  return (
    <View>
      <QRCode
        value={qrValue}
        size={qrSize}
        color="black"
        backgroundColor="white"
        quietZone={10}
      />
    </View>
  );
}
