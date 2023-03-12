import React, { useState } from 'react'

const PayPalFeeCalculator = () => {
    const [amount, setAmount] = useState("");
    const [totalFees, setTotalFees] = useState("");
    const [receive, setReceive] = useState("");
    const [asked, setAsked] = useState("");
    const calculateFee = () => {
        const payPalFees = Number(amount) * 0.044 + 0.30;
        setTotalFees(payPalFees);
        setAsked((Number(amount) + 0.3) / 0.971);
        setReceive(Number(amount) - payPalFees);
    }

    return (
        <div id="#">
            <div className='px-2 py-3 bg-slate-50 shadow max-w-7xl mx-auto rounded mb-5'>
                <h1 className='text-2xl my-5 text-center text-[#D09CFA] '>Welcome to Paypal fee Calculator 🦄</h1>
                <hr />
                <div className="mb-3 py-3 space-y-5 md:space-y-0 flex flex-col md:flex-row  items-center justify-center  ">
                    <input type="number" placeholder="Enter amount in $" className="px-3 py-5 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full max-w-md" value={amount}
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
                <h2 className='text-center text-lg font-semibold text-[#D09CFA]'>Paypal fee calculation result</h2> <hr />
                <div className='w-full py-5 md:flex items-start md:justify-evenly'>
                    <div className='md:w-1/3 text-center my-5'>
                        <h3 className='text-lg font-bold'>Total fees</h3>
                        <p className='text-xl font-bold'>{totalFees ? "$" + totalFees.toLocaleString() : "-"}</p>
                    </div>
                    <div className='md:w-1/3 text-center my-5'>
                        <h3 className='text-lg font-bold'>You will receive</h3>
                        {
                            amount ? <div> <p className='text-xl font-bold'>{receive ? "$" + receive.toLocaleString() : "-"}</p>
                                <p className='text-sm '>if you invoice for ${amount.toLocaleString()}</p></div> : <p>-</p>
                        }

                    </div>
                    <div className='md:w-1/3 text-center my-5'>
                        <h3 className='text-lg font-bold'>You should asked for</h3>
                        {asked ? <div><p className='text-xl font-bold'>{asked ? "$" + asked.toLocaleString() : "-"}</p>
                            <p className='text-sm '>if you need ${amount.toLocaleString()}</p></div> : <p>-</p>}
                    </div>


                </div>



            </div>


            {/* add  */}

            <div id='stepstocalculatepaypalfee' className='px-2 py-3 my-5 bg-slate-50 shadow max-w-7xl mx-auto rounded '>
                <h2 className='text-xl font-semibold text-center text-[#D09CFA]'>Steps to Calculate Paypal fee 🪜</h2>
                <hr />
                <h3 className='text-lg'>PayPal is a popular online payment system that allows individuals and businesses to send and receive money electronically. When you use PayPal to receive payments, PayPal charges a fee for their services. Here are the steps to calculate the PayPal fee:</h3>
                <hr />

                <ol className='py-2'>
                    <li className='text-lg '> 1. Enter the amount (in $) in the input box labeled Enter amount. This is the amount of money you will be receiving through PayPal.</li>
                    <li className='text-lg '>2. Click the Calculate button. This will calculate the PayPal fee based on the entered amount.</li>
                    <li className='text-lg '>3. If you need to reset the amount, click the Reset button. This will clear the input box and allow you to enter a new amount.</li>
                    <li className='text-lg '>4. After clicking the Calculate button, the PayPal fee result will appear. The fee amount will be displayed in dollars and cents, and it will be deducted from the total amount you will receive. The result will also show you the net amount you will receive after deducting the PayPal fee.Congratulation 🎊🎉.</li>
                </ol>
            </div>

            {/* about  */}



        </div>
    )
}

export default PayPalFeeCalculator
