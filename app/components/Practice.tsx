export default function Practice(){
    return(
        <>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <h2>受講形態</h2>
                <div className="mb-6 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-8">
                    <div className="flex flex-col rounded-lg border p-4 pt-6">
                        <div className="mb-12">
                            <div className="absolute inset-x-0 -top-3 flex justify-center">
                                <span className="flex h-6 items-center justify-center rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white"></span>
                            </div>
                            <div className="mb-2 text-center text-2xl font-blod text-gray-800">Free</div>
                            <p className={"mx-auto mb-8 px-8 text-center text-gray-500"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, voluptatibus.
                            </p>
                            <div className="space-y-2">
                                <div className="flex gap-2">
                                    <span className="text-gray-600">Lorem ipsum dolor sit.</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-gray-600">Lorem ipsum dolor sit.</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-gray-600">Lorem ipsum dolor sit.</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-gray-600">Lorem ipsum dolor sit.</span>
                                </div>
                            </div>
                            <div className="mt-auto flex flex-col gap-8">
                                <div className="flex items-end justify-center gap-1">
                                    <span className="self-start text-gray-600">d</span>
                                    <span className={"text-4xl font-blod text-gray-800"}>0</span>
                                    <span className={"text-gray-500"}>0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}