import { Injectable } from '@nestjs/common';
import { Node } from './node.model';

@Injectable()
export class LinkedListService<T> {

    private head: Node<T> | null = null;

    add(data: T): T[] {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = newNode;
        }
        return this.getAll();
    }

    getAll(): T[] {
        const result: T[] = [];
        let current = this.head;

        while (current) {
            result.push(current.data);
            current = current.next;
        }

        return result;
    }

    search(data: T): boolean {
        let current = this.head;

        while (current) {
            if (current.data == data) {
                return true;
            }
            current = current.next;
        }

        return false;

    }

    remove(data: T): T[] {
        let current = this.head;
        let prev: Node<T> | null = null;

        while (current) {

            if (current.data == data) {
                if (prev === null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next
                }
            }

            return this.getAll();;

        }
        prev = current;
        current = current.next;
    }
}




