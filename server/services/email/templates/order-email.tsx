import { IProductsDto } from "@/app/components/product-card/ProductCard.types";

type OrderEmailProps = {
  customerName: string;
  customerPhoneNumber: string;
  customerEmail: string;
  products: IProductsDto[];
};

export function OrderEmail({ customerName, products, customerEmail, customerPhoneNumber }: OrderEmailProps) {
  const total = products.reduce((acc, product) => acc + product.price, 0);

  return (
    <div
      style={{
        backgroundColor: "#070B14",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        color: "#FFFFFF",
      }}
    >
      <div
        style={{
          maxWidth: 620,
          margin: "0 auto",
          background: "rgba(255,255,255,0.06)",

          border: "1px solid rgba(255,255,255,0.12)",

          borderRadius: 24,
          overflow: "hidden",
        }}
      >
        {/* HEADER */}

        <div
          style={{
            padding: "32px",
            background: "linear-gradient(135deg,#5B5BF6 0%,#7C4DFF 100%)",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: 32,
            }}
          >
            Fantasmo Shop
          </h1>

          <p
            style={{
              marginTop: 12,
              opacity: 0.9,
            }}
          >
            Novo pedido recebido
          </p>
        </div>

        {/* CONTENT */}

        <div
          style={{
            padding: 32,
          }}
        >
          <p
            style={{
              color: "#B8B8C5",
              marginBottom: 32,
            }}
          >
            Pedido enviado por{" "}
            <strong
              style={{
                color: "#FFFFFF",
              }}
            >
              {customerName}
            </strong>
          </p>

          <p
            style={{
              color: "#B8B8C5",
              marginBottom: 32,
            }}
          >
            Telefone:{" "}
            <strong
              style={{
                color: "#FFFFFF",
              }}
            >
              {customerPhoneNumber}
            </strong>
          </p>

          <p
            style={{
              color: "#B8B8C5",
              marginBottom: 32,
            }}
          >
            Email:{" "}
            <strong
              style={{
                color: "#FFFFFF",
              }}
            >
              {customerEmail}
            </strong>
          </p>

          {products.map((product) => (
            <div
              key={product.id}
              style={{
                marginBottom: 24,
                padding: 20,
                borderRadius: 18,
                background: "rgba(255,255,255,0.04)",

                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <table width="100%" cellPadding="0" cellSpacing="0">
                <tr>
                  {/* IMAGE */}

                  <td width="120">
                    <img
                      src={`http://localhost:3000${product.imagePath}`}
                      alt={product.title}
                      width="100"
                      height="100"
                      style={{
                        borderRadius: 14,
                        objectFit: "cover",
                      }}
                    />
                  </td>

                  {/* INFO */}

                  <td
                    style={{
                      paddingLeft: 20,
                    }}
                  >
                    <h2
                      style={{
                        margin: 0,
                        fontSize: 20,
                        color: "#FFFFFF",
                      }}
                    >
                      {product.title}
                    </h2>

                    <p
                      style={{
                        marginTop: 8,
                        color: "#9CA3AF",
                        lineHeight: 1.5,
                      }}
                    >
                      {product.description}
                    </p>

                    <p
                      style={{
                        marginTop: 16,
                        fontSize: 20,
                        fontWeight: 700,
                        color: "#7C4DFF",
                      }}
                    >
                      R$ {product.price.toFixed(2)}
                    </p>
                  </td>
                </tr>
              </table>
            </div>
          ))}

          {/* TOTAL */}

          <div
            style={{
              marginTop: 40,
              paddingTop: 24,
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <table width="100%">
              <tr>
                <td>
                  <span
                    style={{
                      color: "#9CA3AF",
                      fontSize: 16,
                    }}
                  >
                    Total
                  </span>
                </td>

                <td align="right">
                  <span
                    style={{
                      fontSize: 28,
                      fontWeight: 700,
                      color: "#FFFFFF",
                    }}
                  >
                    R$ {total.toFixed(2)}
                  </span>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
