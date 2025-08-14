import React, { useState } from 'react';
import { DndContext, useSensor, useSensors, PointerSensor } from '@dnd-kit/core';
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';
import SortableItem from '../SortableItem';
import { X } from 'lucide-react';
import { FadeUpOnScroll } from '../FadeUpOnScroll';
import { TypeWriting } from '../TypeWriting';
import LivePersonDetection from '../LivePersonDetection';
import { 
  Select, SelectContent, SelectGroup, SelectItem, 
  SelectLabel, SelectTrigger, SelectValue 
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";

export default function Editor() {
  const [blocks, setBlocks] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [previewMode, setPreviewMode] = useState(false);

  const sensors = useSensors(useSensor(PointerSensor));

  function handleDragEnd(event) {
    const { active, over } = event;
    if (!over) return;

    if (active.id !== over.id) {
      setBlocks((items) => {
        const oldIndex = items.findIndex((i) => i.id === active.id);
        const newIndex = items.findIndex((i) => i.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  function handleAddBlock(value) {
    let newBlock = {
      id: `${value}-${Date.now()}`,
      type: value,
      props: {}
    };
    
    switch (value) {
      case "fadeUp":
        newBlock.props = { text: "" };
        break;
      case "livePersonDetection":
        newBlock.props = {};
        break;
      case "typeWriting":
        newBlock.props = { words: ["Digite aqui", "Seu texto"] };
        break;
      default:
        newBlock.props = { text: value };
    }
    
    setBlocks((prev) => [...prev, newBlock]);
    setSelectedValue("");
  }

  function handleInputChange(id, propName, newValue) {
    setBlocks((prev) =>
      prev.map((block) =>
        block.id === id
          ? { ...block, props: { ...block.props, [propName]: newValue } }
          : block
      )
    );
  }

  function handleRemoveBlock(id) {
    setBlocks((prev) => prev.filter((block) => block.id !== id));
  }

  function handleTypeWritingWordsChange(id, index, newValue) {
    setBlocks((prev) =>
      prev.map((block) => {
        if (block.id === id) {
          const newWords = [...block.props.words];
          newWords[index] = newValue;
          return { ...block, props: { ...block.props, words: newWords } };
        }
        return block;
      })
    );
  }

  function handleAddWord(id) {
    setBlocks((prev) =>
      prev.map((block) =>
        block.id === id
          ? { ...block, props: { ...block.props, words: [...block.props.words, "Novo texto"] } }
          : block
      )
    );
  }

  function handleRemoveWord(id, index) {
    setBlocks((prev) =>
      prev.map((block) => {
        if (block.id === id && block.props.words.length > 1) {
          const newWords = [...block.props.words];
          newWords.splice(index, 1);
          return { ...block, props: { ...block.props, words: newWords } };
        }
        return block;
      })
    );
  }

  const renderComponent = (block) => {
    switch (block.type) {
      case "fadeUp":
        return (
          <FadeUpOnScroll>
            <div className="text-white text-xl p-4">
              {block.props.text || "Texto com efeito fade"}
            </div>
          </FadeUpOnScroll>
        );
      case "livePersonDetection":
        return <LivePersonDetection />;

      case "typeWriting":
        return <TypeWriting words={block.props.words || ["Texto de exemplo"]} />;
      default:
        return <div className="text-white">{block.props.text}</div>;
    }
  };

  const renderPropsEditor = (block) => {
    switch (block.type) {
      case "fadeUp":
        return (
          <div className="p-3 bg-gray-800 rounded">
            <label className="block text-gray-200 mb-2">Texto:</label>
            <input
              type="text"
              className="w-full text-gray-200 bg-gray-700 p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              value={block.props.text}
              onChange={(e) => handleInputChange(block.id, "text", e.target.value)}
            />
          </div>
        );
      case "livePersonDetection":
        return (
          <div className="bg-gray-800 rounded">
          </div>
        );
      case "typeWriting":
        return (
          <div className="p-3 bg-gray-800 rounded">
            <label className="block text-gray-200 mb-2">Palavras:</label>
            {block.props.words.map((word, index) => (
              <div key={index} className="flex mb-2">
                <input
                  type="text"
                  className="flex-1 text-gray-200 bg-gray-700 p-2 rounded-l border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  value={word}
                  onChange={(e) =>
                    handleTypeWritingWordsChange(block.id, index, e.target.value)
                  }
                />
                <button
                  className="btn btn-danger px-2 rounded-r"
                  onClick={() => handleRemoveWord(block.id, index)}
                  disabled={block.props.words.length <= 1}
                >
                  <X size={16} />
                </button>
              </div>
            ))}
            <button
              className="btn btn-primary mt-2"
              onClick={() => handleAddWord(block.id)}
            >
              Adicionar palavra
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-6xl mx-auto p-4 md:p-6 rounded-lg bg-gray-900 border border-gray-800">
      <div className="mb-4 flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
        <h2 className="text-xl md:text-2xl font-bold text-gray-200">Editor de Página</h2>
        <button
          className={`btn ${previewMode ? 'btn-secondary' : 'btn-primary'} text-sm md:text-base`}
          onClick={() => setPreviewMode(!previewMode)}
        >
          {previewMode ? 'Voltar ao Editor' : 'Visualizar'}
        </button>
      </div>

      {previewMode ? (
        <div className="p-4 md:p-8 bg-gray-900 text-gray-200 rounded-lg shadow-lg min-h-[300px] md:min-h-[400px] border border-gray-800">
          <div className="flex flex-col gap-3 md:gap-4">
            {blocks.map((block) => (
              <div key={block.id}>{renderComponent(block)}</div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3 md:gap-4">
          <div className="flex flex-col lg:flex-row gap-3 md:gap-4">
            <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
              <SortableContext items={blocks.map((b) => b.id)} strategy={verticalListSortingStrategy}>
                <div className="w-full lg:w-2/3 bg-gray-800 p-3 md:p-4 rounded-lg border border-gray-700">
                  {blocks.length === 0 ? (
                    <div className="text-center text-gray-300 p-8">
                      Adicione componentes usando o menu à direita
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4">
                      {blocks.map((block) => (
                        <SortableItem key={block.id} id={block.id}>
                          <div className="flex justify-between items-center w-full">
                            <div className="font-medium text-gray-200">{block.type}</div>
                            <button
                              className="btn btn-ghost text-gray-400 hover:text-gray-200"
                              onClick={() => handleRemoveBlock(block.id)}
                            >
                              <X size={18} />
                            </button>
                          </div>
                          {renderPropsEditor(block)}
                        </SortableItem>
                      ))}
                    </div>
                  )}
                </div>
              </SortableContext>
            </DndContext>

            <div className="w-full lg:w-1/3 bg-gray-700 p-3 md:p-4 rounded-lg border border-gray-600">
              <h3 className="text-base md:text-lg font-medium mb-3 md:mb-4 text-gray-200">Componentes Disponíveis</h3>
              <Select value={selectedValue} onValueChange={handleAddBlock}>
                <SelectTrigger className="w-full mb-2 bg-gray-800 border-gray-600 text-gray-200 text-sm md:text-base">
                  <SelectValue placeholder="Selecione um componente" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600 text-gray-200">
                  <SelectGroup>
                    <SelectLabel className="text-gray-300 text-xs md:text-sm">Componentes:</SelectLabel>
                    <SelectItem value="fadeUp" className="hover:bg-gray-700 text-sm md:text-base">FadeUp</SelectItem>
                    <SelectItem value="livePersonDetection" className="hover:bg-gray-700 text-sm md:text-base">Live Person Detection</SelectItem>
                    <SelectItem value="typeWriting" className="hover:bg-gray-700 text-sm md:text-base">TypeWriting</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          {blocks.length > 0 && (
            <div className="mt-4 md:mt-6 p-4 md:p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 text-gray-200 border-b border-gray-700 pb-2">
                Visualização em Tempo Real
              </h3>
              <div className="flex flex-col gap-3 md:gap-4">
                {blocks.map((block) => (
                  <div key={`preview-${block.id}`} className="border border-gray-700 rounded p-2">
                    {renderComponent(block)}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </Card>
  );
}
