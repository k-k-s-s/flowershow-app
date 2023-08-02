import React from "react";

export default function SelfPublishSteps() {
    return (
        <div id="self-publish" className="py-10 sm:px-2 lg:relative lg:px-0">
            <div className="rounded-md prose dark:prose-invert mx-auto max-w-6xl p-4 lg:max-w-6xl lg:p-8 xl:p-12">
                <h2 className="text-center">
                    Self-publish your digital garden with Flowershow
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4 lg:gap-12">

                    <div className="relative">
                        <div className="flex items-center space-x-4 sm:space-x-8">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-fuchsia-200 bg-fuchsia-100 text-xl text-fuchsia-600 ring-2 ring-white dark:border-fuchsia-900 dark:bg-[#561b5e] dark:text-fuchsia-400 dark:ring-fuchsia-100">
                                1
                            </div>
                            <h3 className="m-0">
                                You have your Obsidian vault and you want to publish it.
                            </h3>
                        </div>
                    </div>
                    <img
                        src="/images/obsidian_vault.png"
                        alt=""
                        className="lg:max-h-[20rem] m-0 lg:my-6"
                    />

                    <div className="relative">
                        <div className="flex items-center space-x-4 sm:space-x-8">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-fuchsia-200 bg-fuchsia-100 text-xl text-fuchsia-600 ring-2 ring-white dark:border-fuchsia-900 dark:bg-[#561b5e] dark:text-fuchsia-400 dark:ring-fuchsia-100">
                                2
                            </div>
                            <h3 className="m-0">Copy Flowershow template repository to your GitHub account and deploy it.</h3>
                        </div>
                    </div>
                    <img
                        src="/images/vercel_deploy.png"
                        alt=""
                        className="lg:max-h-[20rem] m-0 lg:my-6"
                    />

                    <div className="relative">
                        <div className="flex items-center space-x-4 sm:space-x-8">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-fuchsia-200 bg-fuchsia-100 text-xl text-fuchsia-600 ring-2 ring-white dark:border-fuchsia-900 dark:bg-[#561b5e] dark:text-fuchsia-400 dark:ring-fuchsia-100">
                                3
                            </div>
                            <h3 className="m-0">Install Obsidian Flowershow plugin.</h3>
                        </div>
                    </div>
                    <img
                        src="/images/plugin_install.png"
                        alt=""
                        className="lg:max-h-[20rem] m-0 lg:my-6"
                    />

                    <div className="relative">
                        <div className="flex items-center space-x-4 sm:space-x-8">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-fuchsia-200 bg-fuchsia-100 text-xl text-fuchsia-600 ring-2 ring-white dark:border-fuchsia-900 dark:bg-[#561b5e] dark:text-fuchsia-400 dark:ring-fuchsia-100">
                                4
                            </div>
                            <h3 className="m-0">Configure it to be bound with your Flowershow template copy.</h3>
                        </div>
                    </div>
                    <img
                        src="/images/plugin_settings.png"
                        alt=""
                        className="lg:max-h-[20rem] m-0 lg:my-6"
                    />

                    <div className="relative">
                        <div className="flex items-center space-x-4 sm:space-x-8">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-fuchsia-200 bg-fuchsia-100 text-xl text-fuchsia-600 ring-2 ring-white dark:border-fuchsia-900 dark:bg-[#561b5e] dark:text-fuchsia-400 dark:ring-fuchsia-100">
                                5
                            </div>
                            <h3 className="m-0">
                                Open the Flowershow Publish Status panel and publish all your notes!
                            </h3>
                        </div>
                    </div>
                    <img
                        src="/images/publish_status.png"
                        alt=""
                        className="m-0 rounded-md lg:my-6"
                    />

                    <div className="relative">
                        <div className="flex items-center space-x-4 sm:space-x-8">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-fuchsia-200 bg-fuchsia-100 text-xl text-fuchsia-600 ring-2 ring-white dark:border-fuchsia-900 dark:bg-[#561b5e] dark:text-fuchsia-400 dark:ring-fuchsia-100">
                                6
                            </div>
                            <h3 className="m-0">
                                Your digital garden is now live! 🎉
                            </h3>
                        </div>
                    </div>
                    <img
                        src="/images/result.png"
                        alt=""
                        className="m-0 rounded-md lg:my-6"
                    />
                </div>
                <div className="text-center mt-12 text-lg">
                    👉 See our <a href="/docs/publish-tutorial">self-publish tutorial to learn more</a>!
                </div>
            </div>
        </div>
    );
}
