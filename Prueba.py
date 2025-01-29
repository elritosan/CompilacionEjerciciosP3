class Nodo:
    dato, siguiente = None, None

class Lista:
    def __init__(self):  # Cambié _init_ por __init__
        self.frente = None
        self.tamanio = 0

    def insertar(self, dato_usuario):  # Cambié la firma del método para que reciba self
        act = Nodo()
        ant = Nodo()
        nuevo_nodo = Nodo()
        nuevo_nodo.dato = dato_usuario
        if (self.frente is None) or (self.frente.dato > dato_usuario):
            # Inserta un nodo al inicio de la lista y la ordena
            nuevo_nodo.siguiente = self.frente
            self.frente = nuevo_nodo
        else:
            ant = self.frente
            act = self.frente.siguiente
            while (act is not None) and (act.dato < dato_usuario):
                ant = ant.siguiente
                act = act.siguiente
        nuevo_nodo.siguiente = act
        ant.siguiente = nuevo_nodo

    def mostrar_lista(self):
        aux = self.frente
        while aux is not None:
            print(aux.dato)
            aux = aux.siguiente

lista1 = Lista()
lista1.insertar(5)
lista1.insertar(2)
lista1.insertar(1)
lista1.insertar(6)

lista1.mostrar_lista()