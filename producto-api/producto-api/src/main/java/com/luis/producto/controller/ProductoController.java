package com.luis.producto.controller;
import org.springframework.http.HttpStatus;
import com.luis.producto.dto.ProductoDTO;
import com.luis.producto.entity.Producto;
import com.luis.producto.service.ProductoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductoController {

    private final ProductoService productoService;

    public ProductoController(ProductoService productoService) {
        this.productoService = productoService;
    }

    // Obtiene la lista de productos registrados.
    @GetMapping
    public ResponseEntity<List<Producto>> listarProductos() {
        return ResponseEntity.ok(productoService.listarProductos());
    }
    // Registra un nuevo producto.
    @PostMapping
    public ResponseEntity<Producto> crearProducto(
            @Valid @RequestBody ProductoDTO productoDTO) {

        Producto producto = productoService.crearProducto(productoDTO);

        return ResponseEntity.status(HttpStatus.CREATED).body(producto);
    }
    // Actualiza un producto existente.
    @PutMapping("/{id}")
    public ResponseEntity<Producto> actualizarProducto(
            @PathVariable Long id,
            @Valid @RequestBody ProductoDTO productoDTO) {

        Producto producto = productoService.actualizarProducto(id, productoDTO);

        return ResponseEntity.ok(producto);
    }
    // Elimina un producto existente.
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarProducto(@PathVariable Long id) {

        productoService.eliminarProducto(id);

        return ResponseEntity.noContent().build();
    }
}
