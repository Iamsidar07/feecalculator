import React, { useState } from 'react'

const StripeFeeCalculator = () => {
    const [amount, setAmount] = useState("");
    const [totalFees, setTotalFees] = useState("");
    const [receive, setReceive] = useState("");
    const [asked, setAsked] = useState("");
    const calculateFee = () => {
        const payPalFees = Number(amount) * 0.029 + 0.30;
        setTotalFees(payPalFees);
        setAsked((Number(amount) + 0.3) / 0.971);
        setReceive(Number(amount) - payPalFees);
    }

    return (
        <div id="#">
            <div className='px-2 py-3 bg-slate-50 shadow max-w-7xl mx-auto rounded mb-5'>
                <h1 className='text-2xl my-5 text-center text-[#D09CFA]'>Welcome to Stripe fee Calculator 🦄</h1>
                <hr />
                <div className="mb-3 py-3 space-y-5 md:space-y-0 flex flex-col md:flex-row  items-center justify-center  ">
                    <input type="number" placeholder="Enter amount in $" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full max-w-md" value={amount}
                        onChange={(e) => setAmount(e.target.value)} />
                    <div className='flex items-center justify-center'>
                        <button className="text-pink-500 border border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none ml-2 mb-1 ease-linear transition-all duration-150" type="button"
                            onClick={calculateFee}
                        >
                            Calculate
                        </button>
                        <button className="text-pink-500 border border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none ml-2 mb-1 ease-linear transition-all duration-150" type="button"
                            onClick={() => {
                                setAmount("");
                                setAsked("");
                                setReceive("");
                                setTotalFees("")
                            }}
                        >
                            reset
                        </button>
                    </div>
                </div>
                <h2 className='text-center text-lg font-semibold text-[#D09CFA]'>Stripe fee calculation result</h2> <hr />
                <div className='w-full py-5 md:flex items-start md:justify-evenly'>
                    <div className='md:w-1/3 text-center my-5'>
                        <h3 className='text-lg font-bold'>Total fees</h3>
                        <p className='text-xl font-bold'>{totalFees ? "$" + totalFees.toLocaleString() : "-"}</p>
                    </div>
                    <div className='md:w-1/3 text-center my-5'>
                        <h3 className='text-lg font-bold'>You will receive</h3>
                        {
                            amount ? <div> <p className='text-xl font-bold'>{receive ? "$" + receive.toLocaleString() : "-"}</p>
                                <p className='text-sm'>if you invoice for ${amount.toLocaleString()}</p></div> : <p>-</p>
                        }

                    </div>
                    <div className='md:w-1/3 text-center my-5'>
                        <h3 className='text-lg font-bold'>You should asked for</h3>
                        {asked ? <div><p className='text-xl font-bold'>{asked ? "$" + asked.toLocaleString() : "-"}</p>
                            <p className='text-sm'>if you need ${amount.toLocaleString()}</p></div> : <p>-</p>}
                    </div>


                </div>



            </div>


            {/* add  */}

            <div id='stepstocalculatepaypalfee' className='px-2 py-3 my-5 bg-slate-50 shadow max-w-7xl mx-auto rounded '>
                <h3 className='text-xl font-semibold text-center text-[#D09CFA]'>Steps to Calculate Stripe fee 🪜</h3>
                <hr />
                <h4 className='my-2 text-lg'>Calculating Stripe fee involves two parts - a fixed fee and a variable fee. Here are the steps to calculate the Stripe fee:</h4>
                <ol className='py-2'>
                    <li className='text-lg '> 1. Determine the transaction amount: Enter the transaction amount in dollars in the input box labeled "Enter amount.</li>
                    <li className='text-lg '>2. Calculate the fixed fee: Stripe charges a fixed fee of 30 cents per transaction. To calculate the fixed fee, simply add 30 cents to the transaction amount.</li>
                    <li className='text-lg '>3. Calculate the variable fee: Stripe charges a variable fee of 2.9% of the transaction amount. To calculate the variable fee, multiply the transaction amount by 2.9% (or 0.029).</li>
                    <li className='text-lg '>4. Add the fixed fee and the variable fee: Add the result of step 2 and step 3 to get the total Stripe fee.</li>
                    <li className='text-lg '>5. Display the result: The result of step 4 is the total Stripe fee, which should be displayed after clicking the Calculate button.</li>
                    <li className='text-lg '>6. Reset the amount: To reset the amount, click the Reset button. This will clear the input box and any previously calculated fees.</li>
                    <li className='text-lg '>7. Congratulations! 🎊 You have now calculated the Stripe fee for the transaction.</li>
                </ol>
            </div>

            {/* about  */}



        </div>
    )
}

export default StripeFeeCalculator
