"use client";

import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface Props {
  aiOutput: string;
}

const OutputSection = ({ aiOutput }: Props) => {
  const [editorContent, setEditorContent] = useState("Your Result will appear here");

  useEffect(() => {
    setEditorContent(aiOutput);
  }, [aiOutput]);

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
        <Button className="flex gap-2" onClick={() => navigator.clipboard.writeText(editorContent)}>
          <Copy className="w-4 h-4" /> Copy
        </Button>
      </div>
      <ReactQuill
        value={editorContent}
        onChange={setEditorContent}
        theme="snow"
        className="h-[600px]"
      />
    </div>
  );
};

export default OutputSection;
