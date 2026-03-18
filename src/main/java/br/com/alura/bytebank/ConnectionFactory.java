package br.com.alura.bytebank;

import java.sql.Connection;
import java.sql.SQLException;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

public class ConnectionFactory {
    public Connection recuperarConexao(){
        try{
            return createDataSource().getConnection();
        }catch (SQLException e){
            throw new RuntimeException(e);
        }
    }

    private HikariDataSource createDataSource() {
        String url = System.getenv("DATABASE_URL");
        String user = System.getenv("DATABASE_USER");
        String password = System.getenv("DATABASE_PASSWORD");

        // Se não tiver variáveis de ambiente, usa o config.properties local
        if (url == null || url.isEmpty()) {
            try {
                java.util.Properties props = loadProperties();
                url = props.getProperty("db.url");
                user = props.getProperty("db.user");
                password = props.getProperty("db.password");
            } catch (java.io.IOException e) {
                throw new RuntimeException(e);
            }
        }

        HikariConfig config = new HikariConfig();
        config.setJdbcUrl(url);
        config.setUsername(user);
        config.setPassword(password);
        config.setMaximumPoolSize(10);
        return new HikariDataSource(config);
    }

    private java.util.Properties loadProperties() throws java.io.IOException {
        try (java.io.FileInputStream fs = new java.io.FileInputStream("config.properties")) {
            java.util.Properties props = new java.util.Properties();
            props.load(fs);
            return props;
        }
    }
}