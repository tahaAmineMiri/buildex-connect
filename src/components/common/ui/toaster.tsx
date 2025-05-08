import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/common/ui/toast"

/**
 * Toaster Component
 * 
 * Renders a collection of toast notifications using the toast context.
 * Each toast can have a title, description, and optional action.
 */
export function Toaster() {
  // Get toasts from the toast context
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {/* Map through and render each toast notification */}
      {toasts.map(({ 
        id, 
        title, 
        description, 
        action, 
        ...props 
      }) => (
        <Toast key={id} {...props}>
          {/* Toast content container */}
          <div className="grid gap-1">
            {/* Render title if provided */}
            {title && (
              <ToastTitle>
                {title}
              </ToastTitle>
            )}
            
            {/* Render description if provided */}
            {description && (
              <ToastDescription>
                {description}
              </ToastDescription>
            )}
          </div>
          
          {/* Render action if provided */}
          {action}
          
          {/* Close button */}
          <ToastClose />
        </Toast>
      ))}
      
      {/* Toast viewport - container where toasts appear */}
      <ToastViewport />
    </ToastProvider>
  )
}