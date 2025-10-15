import React from 'react';

function Write() {
  return (
    <div className="h-screen">
      <div className="flex flex-col items-center gap-8 px-2 py-24">
        <div className="flex flex-col items-center gap-4">
          <p>TUESDAY, OCTOBER 14, 2025</p>
          <div className="flex flex-col items-center gap-2">
            <p className="text-5xl">Good Morning.</p>
            <p>Take a moment to reflect on your journey</p>
          </div>
        </div>
        <div className="flex w-full max-w-4xl flex-col gap-6 rounded-md bg-white p-8">
          <div>
            <p>Category</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <button className="bg-bgMain rounded-full px-4 py-1">Progress</button>
              <button className="bg-bgMain rounded-full px-4 py-1">Challenge</button>
              <button className="bg-bgMain rounded-full px-4 py-1">Realization</button>
              <button className="bg-bgMain rounded-full px-4 py-1">Reflection</button>
              <button className="bg-bgMain rounded-full px-4 py-1">Code Snippet</button>
              <button className="bg-bgMain rounded-full px-4 py-1">Growth/Achievement</button>
            </div>
          </div>
          <div>
            <p>Title</p>
            <input
              className="focus:outline-bg100 bg-bgMain w-full rounded-md p-2 outline-none focus:outline-1 focus:outline-solid"
              type="text"
              placeholder="Give your entry a meaningful title ..."
            />
          </div>
          <div>
            <p>Your Thoughts</p>
            <textarea
              placeholder="Pour your thoughts into this page..."
              className="focus:outline-bg100 bg-bgMain w-full resize-none rounded-md p-2 focus:outline-solid"
              name=""
              id=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;
