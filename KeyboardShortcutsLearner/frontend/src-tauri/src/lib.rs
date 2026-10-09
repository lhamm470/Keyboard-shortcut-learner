#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|app| {
            if cfg!(debug_assertions) {
                app.handle().plugin(
                    tauri_plugin_log::Builder::default()
                        .level(log::LevelFilter::Info)
                        .build(),
                )?;
            }

            #[cfg(target_os = "windows")]
            {
                use tauri::Manager;
                use windows::Win32::Graphics::Dwm::{
                    DwmSetWindowAttribute,
                    DWMWA_WINDOW_CORNER_PREFERENCE,
                    DWMWCP_DONOTROUND,
                };

                let window = app
                    .get_webview_window("main")
                    .expect("Main window not found");

                let hwnd = window
                    .hwnd()
                    .expect("Failed to get native window handle");

                let preference = DWMWCP_DONOTROUND;

                unsafe {
                    DwmSetWindowAttribute(
                        windows::Win32::Foundation::HWND(hwnd.0 as *mut _),
                        DWMWA_WINDOW_CORNER_PREFERENCE,
                        &preference as *const _ as *const std::ffi::c_void,
                        std::mem::size_of_val(&preference) as u32,
                    )
                    .expect("Failed to disable rounded window corners");
                }
            }

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while building tauri application");
}