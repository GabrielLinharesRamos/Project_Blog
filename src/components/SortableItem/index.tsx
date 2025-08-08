import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical } from 'lucide-react';
import React from 'react';

interface SortableItemProps {
  id: string;
  children: React.ReactNode;
}

export default function SortableItem({ id, children }: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '0.5rem',
    marginBottom: '0.5rem',
    background: '#1f2937',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.5rem'
  };

  return (
    <div ref={setNodeRef} style={style}>
      <span
        {...attributes}
        {...listeners}
        style={{ cursor: 'grab', display: 'flex', alignItems: 'center' }}
      >
        <GripVertical size={20} />
      </span>

      <div style={{ flex: 1 }}>
        {children}
      </div>
    </div>
  );
}
