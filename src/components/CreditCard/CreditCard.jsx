export default function CreditCard() {
    return (
        <div className="">

            <p className="font-[roboto] font-semibold uppercase text-center">Payment method</p>

            <div
                className="flex flex-col justify-center items-center bg-gray-800 p-6 border border-white border-opacity-30 rounded-lg shadow-md max-w-xs mx-auto h-auto sm:h-[50vh] md:h-[40vh] lg:h-[30vh]"
            >
                <div className="flex flex-row items-center justify-between mb-3 w-full">
                    <input
                        className="w-full h-10 border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2 mb-3 flex-grow"
                        type="text"
                        name="cardName"
                        id="cardName"
                        placeholder="Full Name"
                    />
                    <div
                        className="flex items-center justify-center relative w-14 h-9 bg-gray-800 border border-white border-opacity-20 rounded-md"
                    >
                        <svg
                            className="text-white fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 48 48"
                        >
                            <path
                                fill="#ff9800"
                                d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                            ></path>
                            <path
                                fill="#d50000"
                                d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                            ></path>
                            <path
                                fill="#ff3d00"
                                d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                            ></path>
                        </svg>
                    </div>
                </div>

                <div className="flex flex-col space-y-3 w-full">
                    <input
                        className="w-full h-10 border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2"
                        type="text"
                        name="cardNumber"
                        id="cardNumber"
                        placeholder="0000 0000 0000 0000"
                    />
                    <div className="flex flex-col sm:flex-row justify-between gap-4 w-full">
                        <input
                            className="w-full sm:w-[48%] h-10 border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2"
                            type="text"
                            name="expiryDate"
                            id="expiryDate"
                            placeholder="MM/AA"
                        />
                        <input
                            className="w-full sm:w-[48%] h-10 border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2"
                            type="text"
                            name="cvv"
                            id="cvv"
                            placeholder="CVV"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}
