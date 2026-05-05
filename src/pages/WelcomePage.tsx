import { Button } from "@/shared/components/ui/button";
import { LogIn, UserPlus } from "lucide-react";
import { Typography } from "@/shared/components/ui/typography";

export default function WelcomePage() {
  return (
    <>
      <header>
        <Button>Modo oscuro</Button>
      </header>
      <section className="flex grow flex-col justify-center gap-3">
        <section className="flex gap-3">
          <figure className="bg-crimson-2 rounded-lg p-3.5">image</figure>
          <Typography variant={"h1"}>Hnoss</Typography>
        </section>
        <Typography variant={"h2"}>
          Podemos ser el cambio que necesitamos.
        </Typography>
        <Typography>
          Herramienta accesible, intuitiva y segura para el control de gastos
          personales.
        </Typography>
      </section>
      <footer className="flex flex-col gap-4">
        <Button>
          <LogIn />
          Iniciar sesión
        </Button>
        <Button variant={"secondary"}>
          <UserPlus />
          Crear cuenta
        </Button>
      </footer>
    </>
  );
}
