export default function PaymentSuccess({
    searchParams: { amount },
  }: {
    searchParams: { amount: string };
  }) {
    return (
      <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md 
      bg-gradient-to-tr from-[#353434] to-[#bc9729]">
        <div className="mb-10">
          <h1 className=" mytext text-4xl font-extrabold mb-2">Thank you!</h1>
          <h2 className="text-2xl">You successfully sent</h2>
  
          <div className="bg-[#f4dec6] p-2 rounded-md text-black mt-5 text-4xl font-bold">
            ${amount}
          </div>
        </div>
      </main>
    );
  }
