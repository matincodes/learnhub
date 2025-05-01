import React from 'react'

function dummy() {
    return (
        <div className="min-h-screen bg-white font-san">
            <div className="mx-auto max-w-6xl">


                <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-8 w-[500px]">
                        <Link
                            to="/pricing"
                            className="mb-6 items-center text-sm text-gray-500 underline hover:text-gray-700"
                        >
                            Go back
                        </Link>
                        <div>
                            <h1 className="mb-6 text-2xl font-bold">Checkout</h1>

                            <div className="space-y-6">
                                <div>
                                    <h2 className="mb-4 text-lg font-semibold">
                                        Personal Details
                                    </h2>
                                    <div className="space-y-2">
                                        <div>
                                            <label className="text-sm text-gray-600">Full name</label>
                                            <div className="text-sm">Abiola Elizabeth</div>
                                        </div>
                                        <div>
                                            <label className="text-sm text-gray-600">
                                                Email address
                                            </label>
                                            <div className="text-sm">
                                                Abiolaelizabethxh0@gmail.com
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="mb-4 text-lg font-semibold">
                                        Subscription Details
                                    </h2>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-sm text-gray-600">
                                                {plan === 'Year' ? 'Select number of years' : 'Select number of months'}
                                            </label>
                                            <Select defaultValue={selectedYear} onValueChange={setselectedYear}>
                                                <SelectTrigger className="w-[250px]">
                                                    <SelectValue placeholder="Select duration" />
                                                </SelectTrigger>
                                                <SelectContent className="bg-white">
                                                    {plan === 'Year' ? (
                                                        <>
                                                            <SelectItem value="1">1 Year</SelectItem>
                                                            <SelectItem value="2">2 Years</SelectItem>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <SelectItem value="1">1 Month</SelectItem>
                                                            <SelectItem value="3">3 Months</SelectItem>
                                                            <SelectItem value="6">6 Months</SelectItem>
                                                            <SelectItem value="12">12 Months</SelectItem>
                                                        </>
                                                    )}
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <Card>
                                            <CardContent className="flex items-start gap-4 p-0">
                                                <div className="h-16 w-64 overflow-hidden rounded-lg bg-gray-100">
                                                    <img
                                                        src="/assets/monthly plan 1.png"
                                                        alt={`${plan}ly Plan`}
                                                        width={64}
                                                        height={64}
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold">{plan}ly Plan</h3>
                                                    <p className="mt-1 text-sm text-gray-600">
                                                        {plan == "Year" ? 'With this plan you will get to save 17% from the monthly plan in a year' : 'With this plan you will have access to all courses and dashboard for selected months.'}

                                                    </p>
                                                    <div className="mt-2">
                                                        <span className="font-semibold">
                                                            NGN {totalPrice?.toLocaleString("en-NG", { minimumFractionDigits: 0 })}
                                                        </span>
                                                        <span>
                                                            /{selectedYear} {Number(selectedYear) > 1 ? (plan === 'Year' ? "Years" : "Months") : (plan === 'Year' ? "Year" : "Month")}
                                                        </span>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8 w-full md:bg-gray-100 md:min-h-screen px-4 py-2">
                        <div>
                            <h2 className="mb-6 text-2xl font-bold">Summary</h2>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="mb-4 text-lg font-semibold">
                                        Payment Overview
                                    </h3>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Duration</span>
                                            <span>
                                                {selectedYear} {Number(selectedYear) > 1 ? (plan === 'Year' ? "Years" : "Months") : (plan === 'Year' ? "Year" : "Month")}
                                            </span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Total Price</span>
                                            <span className="font-semibold">
                                                NGN {totalPrice?.toLocaleString("en-NG", { minimumFractionDigits: 0 })}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <Button className="w-full bg-green-700 hover:bg-green-800 flex gap-2 items-center">
                                    <span className='text-white'>Checkout with   </span>
                                    <img
                                        w
                                        src="/assets/download__4__1-removebg-preview 1.png"
                                        alt="Monthly Plan"
                                        className="h-4 w-auto"
                                    />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default dummy