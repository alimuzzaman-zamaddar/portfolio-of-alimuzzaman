import React from 'react';
const resumeLink = "https://alimuzzmanportfolio.netlify.app/resume.pdf"
const Download = () => {
    const handleDownload = () => {
        const fileName = resumeLink.split('/').pop()
        const aTag = document.createElement('a')
        aTag.href = resumeLink;
        aTag.setAttribute('download',fileName)
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    }

    return (
        <div>
            <button className='px-8  bg-[#877a52] hover:bg-[#d3aa2f] duration-700 p-2 md:py-3 text-white mt-5 rounded-md' onClick={handleDownload}>Download resume</button>
        </div>
    );
};

export default Download;