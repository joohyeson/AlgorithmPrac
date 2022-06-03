class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self, data):
        self.head = Node(data)

    def insert(self, value):
        cur = self.head
        while cur.next is not None:
            cur = cur.next
        cur.next = Node(value)

    def get_node(self, index):
        node = self.head
        count = 0
        while count < index:
            count += 1
            node = node.next

        return node

    def delete_Node(self, index):
        if index == 0:
            del_node = self.head.data
            self.head = self.head.next

            return del_node

        node = self.get_node(index-1)
        del_node = node.next.data
        node.next = node.next.next
        return del_node


n, k = map(int, input().split())
mList = LinkedList(1)
for i in range(n-1):
    mList.insert(i+2)

human_count = n-1
node_num = 0
print("<", end="")
for i in range(n):
    node_num = (node_num+k-1) % (human_count+1)
    human_count -= 1
    node = mList.delete_Node(node_num)

    if(i == n-1):
        print(node, end="")
    else:
        print(node, end=", ")

print(">")
