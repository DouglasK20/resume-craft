"use client";
import { useEditor, EditorContent } from '@tiptap/react';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import StarterKit from '@tiptap/starter-kit';
import { MenuBar } from './menu-bar';
import { cn } from '@/lib/utils';

type EditorProps = {
    value: string;
    onChange?: (value: string) => void;
    className?: string;
}

export function Editor({ value, onChange, className }: EditorProps) {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                bulletList: {
                    HTMLAttributes: {
                        class: "list-disc pl-4"
                    }
                },
                orderedList: {
                    HTMLAttributes: {
                        class: "list-decimal pl-4"
                    }
                }
            }),
            Underline,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
        ],
        content: value,
        editorProps: {
            attributes: {
                class: "focus:outline-none h-full p-4"
            }
        },
        onCreate({ editor }) {
            onChange?.(editor.getHTML());
        },
        onUpdate({ editor }) {
            onChange?.(editor.getHTML());
        },
        autofocus: false,
    })

    return (
        <div className={cn("bg-background border border-muted rounded-2xl w-full flex flex-col", className)}>
            <MenuBar editor={editor} />
            <div className='h-full [&>div]:h-full flex flex-col overflow-y-auto'>
                <EditorContent editor={editor} />
            </div>
        </div>
    );
}