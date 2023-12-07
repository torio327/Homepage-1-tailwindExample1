export default function List() {
    return (
        <>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">受講形態</h2>

                    <div className="mb-6 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-8">

                        <div className="flex flex-col rounded-lg border p-4 pt-6">
                            <div className="mb-12">
                                <div className="mb-2 text-center text-2xl font-bold text-gray-800">企業</div>

                                <p className="mx-auto mb-8 px-8 text-center text-gray-500">
                                    社員がESGを意識した考え方を身につける</p>

                                <div className="space-y-2">

                                    <div className="flex gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="h-6 w-6 shrink-0 text-indigo-500" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M5 13l4 4L19 7"/>
                                        </svg>

                                        <span className="text-gray-600">対面授業可能</span>
                                    </div>

                                    <div className="flex gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="h-6 w-6 shrink-0 text-indigo-500" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M5 13l4 4L19 7"/>
                                        </svg>

                                        <span className="text-gray-600">個別相談あり</span>
                                    </div>

                                    <div className="flex gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="h-6 w-6 shrink-0 text-indigo-500" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M5 13l4 4L19 7"/>
                                        </svg>

                                        <span className="text-gray-600">実践の評価あり</span>
                                    </div>

                                    <div className="flex gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="h-6 w-6 shrink-0 text-indigo-500" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M5 13l4 4L19 7"/>
                                        </svg>

                                        <span className="text-gray-600">特別な内容</span>
                                    </div>

                                </div>
                            </div>

                            <div className="mt-auto flex flex-col gap-8">
                                <div className="flex items-end justify-center gap-1">
                                    <span className="text-4xl font-bold text-gray-800">30000</span>
                                    <span className="place-self-end text-gray-600">円</span>
                                    <span className="text-gray-500">per user/all lessons</span>
                                </div>

                                <a href="#"
                                   className="block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">購入</a>
                            </div>
                        </div>

                        <div className="relative flex flex-col rounded-lg border p-4 pt-6">
                            <div className="mb-12">
                                <div className="mb-2 text-center text-2xl font-bold text-gray-800">個人</div>

                                <p className="mx-auto mb-8 px-8 text-center text-gray-500">将来のためにESGの考え方を身につける</p>

                                <div className="space-y-2">

                                    <div className="flex gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="h-6 w-6 shrink-0 text-indigo-500" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M5 13l4 4L19 7"/>
                                        </svg>

                                        <span className="text-gray-600">オンデマンド授業</span>
                                    </div>

                                    <div className="flex gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="h-6 w-6 shrink-0 text-indigo-500" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M5 13l4 4L19 7"/>
                                        </svg>

                                        <span className="text-gray-600">チャット相談あり</span>
                                    </div>

                                    <div className="flex gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="h-6 w-6 shrink-0 text-indigo-500" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M5 13l4 4L19 7"/>
                                        </svg>

                                        <span className="text-gray-600">復習機能付き</span>
                                    </div>



                                </div>
                            </div>

                            <div className="mt-auto flex flex-col gap-8">
                                <div className="flex items-end justify-center gap-1">
                                    <span className="text-4xl font-bold text-gray-800">35000</span>
                                    <span className="place-self-end text-gray-600">円</span>
                                    <span className="text-gray-500">per user/all lessons</span>
                                </div>

                                <a href="#"
                                   className="block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">購入</a>
                            </div>
                        </div>

                        <div className="flex flex-col rounded-lg border p-4 pt-6">
                            <div className="mb-12">
                                <div className="mb-2 text-center text-2xl font-bold text-gray-800">教育機関</div>

                                <p className="mx-auto mb-8 px-8 text-center text-gray-500">生徒自らがESGについて考え、次世代に継承する</p>

                                <div className="space-y-2">

                                    <div className="flex gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="h-6 w-6 shrink-0 text-indigo-500" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M5 13l4 4L19 7"/>
                                        </svg>

                                        <span className="text-gray-600">オンデマンド可能</span>
                                    </div>

                                    <div className="flex gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="h-6 w-6 shrink-0 text-indigo-500" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M5 13l4 4L19 7"/>
                                        </svg>

                                        <span className="text-gray-600">対面授業可能</span>
                                    </div>

                                    <div className="flex gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="h-6 w-6 shrink-0 text-indigo-500" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M5 13l4 4L19 7"/>
                                        </svg>

                                        <span className="text-gray-600">演習問題付き</span>
                                    </div>

                                    <div className="flex gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="h-6 w-6 shrink-0 text-indigo-500" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M5 13l4 4L19 7"/>
                                        </svg>

                                        <span className="text-gray-600">復習機能付き</span>
                                    </div>

                                    <div className="flex gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="h-6 w-6 shrink-0 text-indigo-500" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M5 13l4 4L19 7"/>
                                        </svg>

                                        <span className="text-gray-600">チャット質問・個別質問可能</span>
                                    </div>

                                </div>
                            </div>

                            <div className="mt-auto flex flex-col gap-8">
                                <div className="flex items-end justify-center gap-1">
                                    <span className="text-4xl font-bold text-gray-800">10000</span>
                                    <span className="place-self-end text-gray-600">円</span>
                                    <span className="text-gray-500">per user/all lessons</span>
                                </div>

                                <a href="#"
                                   className="block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">購入</a>
                            </div>
                        </div>
                    </div>

                    <div className="text-center text-sm text-gray-500 sm:text-base">ヘルプについて <a href="#"
                                                                                                           className="text-gray-500 underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Get
                        in touch</a>.
                    </div>
                </div>
            </div>
        </>
    )
}