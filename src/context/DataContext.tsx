import { createContext, useState } from 'react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';

import type { Items, Event } from '../types';
import { DEFAULT_Data } from '../constants/defaults';

const generateId = () => {
	const timestamp = Date.now().toString(36);
	const randomStr = Math.random().toString(36).substring(2);
	const uniquePrefix = Array.from({ length: 8 }, () =>
		Math.floor(Math.random() * 16).toString(16)
	).join('');
	return `${uniquePrefix}-${timestamp}-${randomStr}`;
};

export type DataContextType = {
	data: Items;
	setData: Dispatch<SetStateAction<Items>>;
	addTopic: () => void;
	removeTopic: (topicIndex: number) => void;
	addEvent: (topicIndex: number) => void;
	removeEvent: (topicIndex: number, eventId: string) => void;
	blurTopicTitle: (topicIndex: number, directValue?: string) => void;
	blurEventWhat: (topicIndex: number, eventId: string) => void;
	blurEventWhen: (topicIndex: number, eventId: string) => void;
	handleTopicOrder: (
		topicIndex: number,
		direction: 'up' | 'down',
		disabled: boolean
	) => void;
	applyImport: (json: Items) => void;
};

export const DataContext = createContext<DataContextType | undefined>(
	undefined
);

type DataProviderProps = {
	children: ReactNode;
};

export function DataProvider({ children }: DataProviderProps): JSX.Element {
	const [data, setData] = useState<Items>(() =>
		DEFAULT_Data.map((topic) => ({
			...topic,
			events: topic.events.map((event) => ({ ...event, id: generateId() }))
		}))
	);

	const makeNewEvent = (): Event => ({ id: generateId(), what: '', when: '' });

	const sortEvents = (events: Event[]) => {
		return [...events].sort((a, b) => {
			// If either event is empty (no when/what), put it at the end
			if (!a.when && !a.what) return 1;
			if (!b.when && !b.what) return -1;

			const dateA = a.when ? new Date(a.when) : null;
			const dateB = b.when ? new Date(b.when) : null;

			const timeA =
				dateA && !isNaN(dateA.getTime()) ? dateA.getTime() : Infinity;
			const timeB =
				dateB && !isNaN(dateB.getTime()) ? dateB.getTime() : Infinity;

			if (timeA === Infinity && timeB === Infinity) {
				return 0;
			}

			return timeA - timeB;
		});
	};

	const dedupeAndSortEvents = (events: Event[]) => {
		const nonEmptyEvents = events.filter((event) => event.when || event.what);
		const uniqueNonEmptyEvents = nonEmptyEvents.filter(
			(event, index, self) =>
				index ===
				self.findIndex((e) => e.when === event.when && e.what === event.what)
		);

		const emptyEvents = events.filter((event) => !event.when && !event.what);

		return sortEvents([...uniqueNonEmptyEvents, ...emptyEvents]);
	};

	function addTopic() {
		const newData = [...data];
		newData.push({
			topic: '',
			events: [makeNewEvent()]
		});
		setData(newData);
	}

	function removeTopic(topicIndex: number) {
		const newData = [...data];
		if (newData.length === 1) {
			newData[0].topic = '';
			newData[0].events = [makeNewEvent()];
			setData(newData);
		} else {
			newData.splice(topicIndex, 1);
			setData(newData);
		}
	}

	function addEvent(topicIndex: number) {
		const newData = [...data];
		if (newData[topicIndex]) {
			newData[topicIndex].events.push(makeNewEvent());
			newData[topicIndex].events = dedupeAndSortEvents(
				newData[topicIndex].events
			);
			setData(newData);
		}
	}

	function removeEvent(topicIndex: number, eventId: string) {
		const newData = [...data];
		if (newData[topicIndex]) {
			const initialLength = newData[topicIndex].events.length;
			newData[topicIndex].events = newData[topicIndex].events.filter(
				(event) => event.id !== eventId
			);

			if (newData[topicIndex].events.length === 0 && initialLength > 0) {
				newData[topicIndex].events.push(makeNewEvent());
			}

			newData[topicIndex].events = sortEvents(newData[topicIndex].events);
			setData(newData);
		}
	}

	function blurTopicTitle(topicIndex: number, directValue?: string) {
		let value: string;

		if (directValue !== undefined) {
			value = directValue;
		} else {
			const input = document.getElementById(
				`topic-${topicIndex}`
			) as HTMLInputElement | null;

			if (!input || topicIndex < 0 || topicIndex >= data.length) {
				return;
			}

			value = input.value;
		}

		const newData = [...data];
		newData[topicIndex].topic = value;
		setData(newData);
	}

	function blurEventWhen(topicIndex: number, eventId: string) {
		const input = document.getElementById(
			`when-${topicIndex}-${eventId}`
		) as HTMLInputElement | null;
		const value = input?.value as string;
		const newData = [...data];
		if (newData[topicIndex]) {
			const eventIndex = newData[topicIndex].events.findIndex(
				(event) => event.id === eventId
			);
			if (eventIndex !== -1) {
				newData[topicIndex].events[eventIndex].when = value;
				newData[topicIndex].events = dedupeAndSortEvents(
					newData[topicIndex].events
				);
				setData(newData);
			}
		}
	}

	function blurEventWhat(topicIndex: number, eventId: string) {
		const input = document.getElementById(
			`what-${topicIndex}-${eventId}`
		) as HTMLInputElement | null;
		const value = input?.value as string;
		const newData = [...data];
		if (newData[topicIndex]) {
			const eventIndex = newData[topicIndex].events.findIndex(
				(event) => event.id === eventId
			);
			if (eventIndex !== -1) {
				newData[topicIndex].events[eventIndex].what = value;
				newData[topicIndex].events = dedupeAndSortEvents(
					newData[topicIndex].events
				);
				setData(newData);
			}
		}
	}

	function handleTopicOrder(
		topicIndex: number,
		direction: 'up' | 'down',
		disabled = false
	) {
		if (!disabled) {
			const newData = [...data];
			const indexTo = direction === 'up' ? topicIndex - 1 : topicIndex + 1;
			[newData[topicIndex], newData[indexTo]] = [
				newData[indexTo],
				newData[topicIndex]
			];
			setData(newData);
		}
	}

	function applyImport(json: Items) {
		const processedData = json.map((item) => ({
			...item,
			events: dedupeAndSortEvents(
				item.events.map((event) => ({
					...event,
					id: event.id || generateId()
				}))
			)
		}));
		setData(processedData);
	}

	return (
		<DataContext.Provider
			value={{
				data,
				setData,
				addTopic,
				blurTopicTitle,
				removeTopic,
				addEvent,
				blurEventWhat,
				blurEventWhen,
				removeEvent,
				handleTopicOrder,
				applyImport
			}}
		>
			{children}
		</DataContext.Provider>
	);
}
