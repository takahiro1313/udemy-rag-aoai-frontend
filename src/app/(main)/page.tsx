import Image from "next/image";
import MessageArea from "@/components/MessageArea/MessageArea";
import FormInput from "@/components/FormInput/FormInput";

export default function Home() {
  return (
    <div className="flex flex-col text-gray-800 w-full h-full overflow-y-auto">
      <div className="flex bg-slate-300 h-5/6 p-4 justify-center">
        <MessageArea/>
      </div>
      <div className="flex h-1/6 p-4 justify-center items-center">
      <FormInput/>
    </div>      
    </div>
  )
}
