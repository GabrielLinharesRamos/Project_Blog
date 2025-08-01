import React from 'react';
import { DndContext, useSensor, useSensors, PointerSensor } from '@dnd-kit/core';
import { SortableContext, arrayMove, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { useState } from 'react';
import SortableItem from '../SortableItem';
import { FadeUpOnScroll } from '../FadeUpOnScroll';
import { MoveRight } from 'lucide-react';

export default function Editor() {
  const [blocks, setBlocks] = useState([
    { id: 'fade', type: 'FadeUpOnScroll', props: { text: 'Olá mundo!' } },
    { id: 'image', type: 'ImageBlock', props: { src: '/foto.png', alt: 'Minha foto' } },
    // …
  ]);

  const sensors = useSensors(useSensor(PointerSensor));

  function handleDragEnd(event) {
    const { active, over } = event;
    if (!over) {
      return;
    }

    if (active.id !== over.id) {
      setBlocks((items) => {
        const oldIndex = items.findIndex((i) => i.id === active.id);
        const newIndex = items.findIndex((i) => i.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        <SortableContext items={blocks.map((b) => b.id)} strategy={horizontalListSortingStrategy}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {blocks.map((block, index) => (
            <React.Fragment key={block.id}>
                <SortableItem id={block.id}>
                {block.type === 'FadeUpOnScroll' ? (
                    <FadeUpOnScroll>{block.props.text}</FadeUpOnScroll>
                ) : (
                    <img src={block.props.src} alt={block.props.alt} />
                )}
                </SortableItem>

                {/* Adiciona seta ➡️ entre os blocos (menos após o último) */}
                {index < blocks.length - 1 && (
                <span style={{ fontSize: '2rem' }}><MoveRight/></span>
                )}
            </React.Fragment>
            ))}
        </div>
        </SortableContext>
    </DndContext>
  );
}
