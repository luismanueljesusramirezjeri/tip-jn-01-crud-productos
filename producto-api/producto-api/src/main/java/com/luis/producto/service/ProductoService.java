package com.luis.producto.service;

import com.luis.producto.dto.ProductoDTO;
import com.luis.producto.entity.Producto;
import com.luis.producto.exception.RecursoNoEncontradoException;
import com.luis.producto.repository.ProductoRepository;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ProductoService {

    private final ProductoRepository productoRepository;

    public ProductoService(ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }
    // Obtiene todos los productos registrados.
    public List<Producto> listarProductos() {
        return productoRepository.findAll();
    }
    // Busca un producto por su identificador.
    public Producto buscarPorId(Long id) {
        return productoRepository.findById(id)
                .orElseThrow(() ->
                        new RecursoNoEncontradoException(
                                "Producto no encontrado con id: " + id));
    }
    // Registra un nuevo producto en la base de datos.
    public Producto crearProducto(ProductoDTO productoDTO) {

        Producto producto = new Producto();

        producto.setNombre(productoDTO.getNombre());
        producto.setDescripcion(productoDTO.getDescripcion());
        producto.setCantidad(productoDTO.getCantidad());
        producto.setPrecio(productoDTO.getPrecio());

        return productoRepository.save(producto);
    }
    // Actualiza los datos de un producto existente.
    public Producto actualizarProducto(Long id, ProductoDTO productoDTO) {

        Producto producto = buscarPorId(id);

        producto.setNombre(productoDTO.getNombre());
        producto.setDescripcion(productoDTO.getDescripcion());
        producto.setCantidad(productoDTO.getCantidad());
        producto.setPrecio(productoDTO.getPrecio());

        return productoRepository.save(producto);
    }
    // Elimina un producto por su identificador.
    public void eliminarProducto(Long id) {
        Producto producto = buscarPorId(id);
        productoRepository.delete(producto);
    }
}
