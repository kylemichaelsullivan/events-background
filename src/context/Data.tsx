import { useState, createContext, useContext, type ReactNode } from 'react';

import type { Items } from '../types';

import { makeDate } from '../lib/scripts';
import { DEFAULT_Data } from '../lib/defaults';

type DataContextType = {
  data: Items;
  addTopic: () => void;
  removeTopic: (topicIndex: number) => void;
  addEvent: (topicIndex: number) => void;
  removeEvent: (topicIndex: number, eventIndex: number) => void;
  blurTopicTitle: (topicIndex: number) => void;
  blurEventWhen: (topicIndex: number, eventIndex: number) => void;
  blurEventWhere: (topicIndex: number, eventIndex: number) => void;
  handleTopicOrder: (
    topicIndex: number,
    direction: 'up' | 'down',
    disabled: boolean,
  ) => void;
  applyImport: (json: Items) => void;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

type DataProviderProps = {
  children: ReactNode;
};

export const DataProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState(DEFAULT_Data);

  const makeNewEvent = () => ({ where: '', when: '' });

  function sortTopic(topicIndex: number) {
    const events = data[topicIndex].events;

    events.sort(
      (a, b) =>
        +makeDate(a.when) - +makeDate(b.when) || a.where.localeCompare(b.where),
    );

    setData((data: Items) => [...data]);
  }

  function sortAllTopics() {
    for (let topicIndex = 0; topicIndex < data.length; topicIndex++) {
      sortTopic(topicIndex);
    }
  }

  function addTopic() {
    const newData = [...data];
    newData.push({
      topic: '',
      events: [makeNewEvent()],
    });

    setData(newData);
  }

  function removeTopic(topicIndex: number) {
    const newData = [...data];
    newData.splice(topicIndex, 1)[0];

    // leave at least one topic
    if (newData.length) {
      setData(newData);
    }
  }

  function addEvent(topicIndex: number) {
    const newData = [...data];
    newData[topicIndex].events.push(makeNewEvent());

    setData(() => newData);
  }

  function removeEvent(topicIndex: number, eventIndex: number) {
    const newData = [...data];
    if (eventIndex > 0) {
      newData[topicIndex].events.splice(eventIndex, 1)[0];
    }

    // make new event if topic is empty
    if (!newData[topicIndex].events.length) {
      newData[topicIndex].events.push(makeNewEvent());
    }

    setData(newData);
  }

  function blurTopicTitle(topicIndex: number) {
    const input = document.getElementById(
      `topic-${topicIndex}`,
    ) as HTMLInputElement | null;
    const value = input?.value as string;

    const newData = [...data];
    newData[topicIndex].topic = value;

    setData(() => newData);

    sortTopic(topicIndex);
  }

  function blurEventWhen(topicIndex: number, eventIndex: number) {
    const input = document.getElementById(
      `when-${topicIndex}-${eventIndex}`,
    ) as HTMLInputElement | null;
    const value = input?.value as string;

    const newData = [...data];
    newData[topicIndex].events[eventIndex].when = value;

    setData(() => newData);

    sortTopic(topicIndex);
  }

  function blurEventWhere(topicIndex: number, eventIndex: number) {
    const input = document.getElementById(
      `where-${topicIndex}-${eventIndex}`,
    ) as HTMLInputElement | null;
    const value = input?.value as string;

    const newData = [...data];
    newData[topicIndex].events[eventIndex].where = value;

    setData(() => newData);

    sortTopic(topicIndex);
  }

  function handleTopicOrder(
    topicIndex: number,
    direction: 'up' | 'down',
    disabled = false,
  ) {
    if (!disabled) {
      const indexTo = direction === 'up' ? topicIndex - 1 : topicIndex + 1;

      [data[topicIndex], data[indexTo]] = [data[indexTo], data[topicIndex]];

      setData((data: Items) => [...data]);

      sortAllTopics();
    }
  }

  function applyImport(json: Items) {
    setData(json);
  }

  return (
    <DataContext.Provider
      value={{
        data,
        addTopic,
        blurTopicTitle,
        removeTopic,
        addEvent,
        blurEventWhen,
        blurEventWhere,
        removeEvent,
        handleTopicOrder,
        applyImport,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a <DataProvider />');
  }
  return context;
};
