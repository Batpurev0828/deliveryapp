"use client";
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';
import { Ubuntu } from 'next/font/google';
import Button from '@/components/Button';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export default function Home() {
  const router = useRouter();
  return (
    <div className={`${ubuntu.className} h-fit min-h-screen w-screen flex-col flex bg-white px-6 py-[52px]`}>
      <button className="h-12 w-12 flex justify-center items-center bg-icon rounded-full cursor-pointer" onClick={() => router.push('/main/hero')}>
        <X className="w-6 h-6 text-black" />
      </button>
      <img src='https://raw.githubusercontent.com/PKief/vscode-markdown-checkbox/main/logo.png' className='mt-[140px] h-40 w-40 mx-auto'/>
      <p className='text-[#111A2C] text-2xl mx-auto font-bold mt-10'>Congratulations!</p>
      <p className='text-deftext text-sm mx-auto mt-2 text-center w-[215px] mb-auto'>
        You successfully made a payment, enjoy our service!
      </p>
      <Button text={"TRACK ORDER"} nav={"/main/track"}/>
    </div>
  )
}