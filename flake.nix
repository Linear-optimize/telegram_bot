{
  description = "Telegram Bot with Node.js and pnpm";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        # 开发环境
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs_22        # Node.js 运行时
            nodePackages.pnpm # pnpm 包管理器
            typescript       # tsc 编译器
          ];

          shellHook = ''
            echo "Node.js $(node --version)"
            echo "pnpm $(pnpm --version)"
          '';
        };

        # 构建包（可选）
        packages.default = pkgs.buildNpmPackage {
          pname = "telegram_bot";
          version = "1.0.0";
          src = ./.;

          npmDepsHash = ""; # 运行 nix build 后填入报错提示的 hash

          buildPhase = ''
            pnpm install
            pnpm tsc
          '';

          installPhase = ''
            mkdir -p $out/bin
            cp -r dist $out/
          '';
        };
      }
    );
}