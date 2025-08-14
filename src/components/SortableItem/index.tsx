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
  };

  return (
    <div 
      ref={setNodeRef} 
      style={style} 
      className="p-2 sm:p-3 md:p-4 border border-gray-700 rounded-lg mb-2 bg-gray-800 flex items-start gap-2 sm:gap-3 md:gap-4 w-full shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <span
        {...attributes}
        {...listeners}
        className="cursor-grab touch-none text-gray-400 hover:text-gray-300 transition-colors"
      >
        <GripVertical size={16} className="md:size-5" />
      </span>

      <div className="flex-1 w-full">
        {children}
      </div>
    </div>
  );
}
