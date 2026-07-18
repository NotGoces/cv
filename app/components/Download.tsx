"use client";

import React, { useState } from "react";
import type { TranslationFn } from "../constants/translations";

export default function DownloadButton({ t }: { t: TranslationFn }) {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = () => {
        setIsDownloading(true);

        const fileUrl = "/projects/Cv_PabloAbad.pdf";
        const link = document.createElement("a");
        link.href = fileUrl;
        link.setAttribute("download", "CV_Pablo_Abad.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => {
            setIsDownloading(false);
        }, 1500);
    };

    return (
        <div className="flex w-full justify-center">
            <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-base font-medium text-white shadow-sm transition-all duration-200 hover:bg-blue-700 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 dark:bg-blue-500 dark:hover:bg-blue-400"
            >
                {isDownloading ? (
                    <>
                        <svg className="h-5 w-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>{t("download.downloadingBtn")}</span>
                    </>
                ) : (
                    <>
                        <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <span>{t("download.downloadBtn")}</span>
                    </>
                )}
            </button>
        </div>
    );
}