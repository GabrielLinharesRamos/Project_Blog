"use client"

import Editor from "@/components/Editor";

export default function CreatePage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Criador de Páginas</h1>
      <p className="text-gray-600 mb-8">
        Selecione e organize componentes para criar sua página personalizada.
      </p>
      <Editor />
    </div>
  );
}