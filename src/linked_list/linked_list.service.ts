import { Injectable } from '@nestjs/common';
import { Node } from './node.model';

@Injectable()
export class LinkedListService<T> {

    private head: Node<T> | null = null;

    add(data: T): void {
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



}
