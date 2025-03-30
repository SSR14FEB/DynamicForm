import React, { useState } from "react";
import formComponents from "../components/formComponents";
import cssComponents from "../components/cssComponents";
import { DndContext, closestCorners } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function SortableItem({ id, element }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  // 🟢 आइटम को मूव कराने के लिए स्टाइल
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="text-black cursor-grab h-18 border rounded-md w-full"
    >
      {element}
    </div>
  );
}

export default function Form() {
  const [components, setComponents] = useState([]);

  // 🟢 नई component ऐड करने के लिए फ़ंक्शन
  const addComponent = (component) => {
    setComponents((prev) => [
      ...prev,
      { ...component, id: `${component.id}-${Date.now()}` },
    ]);
  };

  // 🟢 ड्रैग एंड ड्रॉप इवेंट हैंडलर
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    setComponents((prev) => {
      const oldIndex = prev.findIndex((item) => item.id === active.id);
      const newIndex = prev.findIndex((item) => item.id === over.id);

      if (oldIndex !== -1 && newIndex !== -1) {
        const updatedComponents = [...prev];
        const [movedItem] = updatedComponents.splice(oldIndex, 1);
        updatedComponents.splice(newIndex, 0, movedItem);
        return updatedComponents;
      }

      return prev;
    });
  };

  return (
    <div className="w-screen h-screen border flex items-center justify-start">
      {/* 🔹 Components List (Left Sidebar) */}
      <aside className="w-1/4 h-full border-gray-500 border-2 flex flex-col p-4">
        <h2 className="text-lg font-bold mb-2">Form Components</h2>
        <ul className="flex flex-wrap gap-2">
          {formComponents.map((component) => (
            <li
              key={component.id}
              className="w-full p-2 border cursor-pointer text-black font-bold font-mono rounded-sm hover:bg-gray-200"
              onClick={() => addComponent(component)}
            >
              {component.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* 🔹 Draggable Area */}
      <div className="w-2/4 border h-full flex flex-col gap-2 items-start justify-start p-4">
        <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
          <SortableContext items={components} strategy={verticalListSortingStrategy}>
            {components.map((comp) => (
              <SortableItem key={comp.id} id={comp.id} element={comp.element()} />
            ))}
          </SortableContext>
        </DndContext>
      </div>

      {/* 🔹 CSS Components (Right Sidebar) */}
      <aside className="w-1/4 h-full border-gray-500 border-2 flex flex-col p-4">
        <h2 className="text-lg font-bold mb-2">CSS Components</h2>
        <ul className="flex flex-wrap gap-2">
          {cssComponents.map((component) => (
            <li key={component.id} className="w-full p-2 border text-black font-bold font-mono rounded-sm">
              {component.element()}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
