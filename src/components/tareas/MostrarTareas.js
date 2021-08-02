import React, {Fragment} from 'react'
import Tarea from './Tarea'

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
  { id: 1, nombre: "Elejir sistema operativo", estado: "Completa" },
  { id: 2, nombre: "Elejir base de datos", estado: "Completa" },
  { id: 3, nombre: "Elejir lenguaje", estado: "Completa" },
  { id: 4, nombre: "Elejir frameworks", estado: "Completa" },
];

class MostrarTareas extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      nombre: "",
      estado: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].nombre = dato.nombre;
        arreglo[contador].estado = dato.estado;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas eliminar la tarea numero "+dato.id);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>
        <Container>
        <h2><span className="text-danger">Proyecto:</span>  Comercio Electronico</h2>
          <button type="button" class="btn btn-success" onClick={()=>this.mostrarModalInsertar()}>Agregar tarea al proyecto</button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>Nº</th>
                <th>Nombre</th>
                <th>Estado</th>
                <th>Editar / Eliminar </th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.nombre}</td>
                  <td>{dato.estado}</td>
                  <td>
                    <button
                      type="button" class="btn btn-primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </button>{" "}
                    <button type="button" class="btn btn-danger" onClick={()=> this.eliminar(dato)}>Eliminar</button>

                    
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Tarea</h3></div>
          </ModalHeader>

          <ModalBody>
           
            
            <FormGroup>
              <label>
                Nombre: 
              </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.nombre}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Estado: 
              </label>
              
              <input
                className="form-control "
                name="estado"
                type="text" 
                onChange={this.handleChange}
                value={this.state.form.estado}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <button
              type="button" class="btn btn-primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </button>
            <button
              type="button" class="btn btn-danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </button>

          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar Tarea</h3></div>
          </ModalHeader>

          <ModalBody>
            
            <FormGroup>
              <label>
                Nombre: 
              </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Estado: 
              </label>
              <input
                className="form-control"
                name="estado"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <button
              type="button" class="btn btn-primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </button>
            <button
              type="button" class="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </button>
            
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default MostrarTareas;