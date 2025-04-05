import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Actualiza el estado para que el próximo renderizado muestre la interfaz de respaldo.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Puedes registrar el error en un servicio de reporte de errores aquí
    console.error("Error capturado por Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Puedes renderizar cualquier interfaz de respaldo personalizada
      return <h2>Algo salió mal. Por favor, intenta recargar la página.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;